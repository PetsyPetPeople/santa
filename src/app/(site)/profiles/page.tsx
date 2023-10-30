'use client';

import { MoviesList, useGetMovieRecommendationsQuery, useSearchMovie } from '@/app/(site)/profiles';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, DatePicker, Input, Row, Select, Typography, theme } from 'antd';
import Title from 'antd/es/typography/Title';
import dayjs from 'dayjs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function MoviesPage() {
  const { token } = theme.useToken();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { setSearch, search, data: movies, isLoading } = useSearchMovie();

  const { data: movieRecommendations, isLoading: recommendationLoading } = useGetMovieRecommendationsQuery({
    take: 6,
    skip: 0,
  });

  const onSortingChange = (e: string) => {
    setSearch((prev) => ({ ...prev, orderBy: e }));
  };

  const onKeywordChange = (e: any) => {
    const val = e.target.value;
    setSearch((prev) => ({
      ...prev,
      filter: {
        ...(prev?.filter || {}),
        keyword: val,
      },
    }));
  };

  const onReleaseDateChange = (e: any) => {
    if (!e) {
      setSearch((prev) => ({
        ...prev,
        filter: {
          ...(prev?.filter || {}),
          release: undefined,
        },
      }));
      return;
    }
    const [from, to] = e;
    const fromDate = from.format('YYYY-DD-MM');
    const toDate = to.format('YYYY-DD-MM');

    setSearch((prev) => ({
      ...prev,
      filter: {
        ...(prev?.filter || {}),
        release: {
          from: fromDate,
          to: toDate,
        },
      },
    }));
  };

  const onClickSearch = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    if (search?.orderBy) {
      current.set('sort', search?.orderBy);
    }

    current.set('f.key', search?.filter?.keyword || '');

    if (search?.filter?.release) {
      current.set('f.release', search.filter.release.from + '.' + search.filter.release.to);
    } else {
      current.delete('f.release');
    }

    const searchUrl = current.toString();

    const query = searchUrl ? `?${searchUrl}` : '';

    router.push<string>(`${pathname}${query}` as any);
  };

  return (
    <>
      <Row gutter={[24, 24]} className='mt-6'>
        <Col span={18}>
          <MoviesList movies={movies} loading={isLoading} listTitle='New Movies' numShow={6} />
        </Col>
        <Col span={6}>
          <div className='bg-white px-2 py-4'>
            <Collapse
              bordered={false}
              style={{ background: token.colorBgContainer }}
              expandIconPosition='end'
              defaultActiveKey={1}
              className='mb-4'
              items={[
                {
                  key: '1',
                  label: (
                    <Title level={4} className='mb-0'>
                      Sort Results By
                    </Title>
                  ),
                  children: (
                    <Select
                      size='large'
                      style={{ width: '100%' }}
                      value={search?.orderBy || ''}
                      onChange={onSortingChange}
                      options={[
                        { value: 'rating.desc', label: 'Rating Descending' },
                        { value: 'rating.asc', label: 'Rating Ascending' },
                        { value: 'releaseDate.desc', label: 'Release Date Descending' },
                        { value: 'releaseDate.asc', label: 'Release Date Ascending' },
                      ]}
                    />
                  ),
                },
              ]}
            />

            <Collapse
              bordered={false}
              style={{ background: token.colorBgContainer }}
              expandIconPosition='end'
              defaultActiveKey={1}
              className='mb-4'
              items={[
                {
                  key: '1',
                  label: (
                    <Title level={4} className='mb-0'>
                      Filters
                    </Title>
                  ),
                  children: (
                    <div>
                      <div className='mb-3 flex flex-col gap-2'>
                        <Typography.Text>Released Date</Typography.Text>
                        <DatePicker.RangePicker
                          value={[
                            search?.filter?.release?.from ? dayjs(search?.filter?.release?.from) : null,
                            search?.filter?.release?.to ? dayjs(search?.filter?.release?.to) : null,
                          ]}
                          size='large'
                          onChange={onReleaseDateChange}
                        />
                      </div>
                      <div className='mb-3 flex flex-col gap-2'>
                        <Typography.Text>Keywords</Typography.Text>
                        <Input
                          size='large'
                          placeholder='Search by keywords...'
                          value={search?.filter?.keyword || ''}
                          suffix={<SearchOutlined />}
                          onChange={onKeywordChange}
                        />
                      </div>
                    </div>
                  ),
                },
              ]}
            />
            <div className='mb-4 px-4'>
              <Button size='large' type='primary' block className='mt-4' onClick={onClickSearch}>
                Search
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      <div className='mt-12'>
        <MoviesList
          movies={movieRecommendations || []}
          loading={recommendationLoading}
          listTitle='Movie Recommendations'
        />
      </div>
    </>
  );
}
