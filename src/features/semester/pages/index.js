import { Button, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllSemesterQuery } from '../../../app/api/semesterApiSlice';
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

import Img1 from './../../../assets/images/CNDT1.png';
import FormSemeterRef from '../components/FormSemeterRef';
import Spinner from '../../../components/Spinner';

const SemesterPage = () => {
  const { data, error, isLoading } = useGetAllSemesterQuery();

  const modalRef = React.useRef();

  return (
    <>
      {error && (
        <Typography.Text type='danger'>{error.message}</Typography.Text>
      )}

      <div>
        <div className='tw-absolute tw-right-[2%] -tw-mt-4'>
          <Button
            icon={<PlusCircleOutlined />}
            className='tw-flex tw-items-center tw-rounded-md tw-border-2 tw-border-none tw-bg-orange-300 tw-px-2  tw-text-slate-100 hover:tw-bg-orange-400'
            type='primary'
            onClick={() => modalRef.current.show('add')}
          >
            Thêm kỳ học
          </Button>
        </div>
      </div>
      <Spinner
        loading={isLoading}
        size='large'
        className={'tw-my-auto tw-mt-10 tw-flex tw-items-center tw-justify-center'}
      />
      {data && (
        <div className='tw-flex tw-flex-wrap tw-justify-between'>
          {data?.semester?.data.map((item, index) => (
            <div
              key={index}
              className='bg-neutral-400 tw-mx-6 tw-my-6 tw-w-1/5 tw-rounded-[3px] tw-border tw-shadow-transparent tw-drop-shadow-xl hover:tw-border-gray-400 hover:tw-opacity-[90%]'
            >
              <div>
                <Link to={`/manage/sem/${item.id}`}>
                  <img
                    className='tw-w-full tw-rounded-t-[3px]'
                    src={Img1}
                    alt=''
                  />
                </Link>
              </div>
              <div className='tw-flex tw-w-full tw-items-center tw-justify-between'>
                <Link
                  className='tw-pl-[10px] tw-text-[16px] tw-font-medium tw-leading-[50px] tw-text-black hover:tw-text-amber-400'
                  to={`/manage/sem/${item.id}`}
                >
                  {item.name}
                </Link>
                <div className='tw-mr-[10px]'>
                  <Button
                    shape='circle'
                    onClick={() => modalRef.current.show('edit', item)}
                    icon={<EditOutlined className='tw-text-[20px]' />}
                    className='tw-border-none tw-bg-transparent hover:tw-bg-transparent'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <FormSemeterRef ref={modalRef} />
    </>
  );
};

export default SemesterPage;
