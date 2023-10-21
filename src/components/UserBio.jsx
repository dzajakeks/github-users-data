import React from 'react';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { BsEnvelope } from 'react-icons/bs';

export function UserBio({ company, location, email, blog }) {
  return (
    <div>
      <div>
        {company ? (
          <p className='flex items-center justify-center'>
            <span className='mr-2'>
              <MdBusiness />
            </span>
            {company}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        {location ? (
          <p className='flex items-center justify-center'>
            <span className='mr-2'>
              <MdLocationOn />
            </span>
            {location}
          </p>
        ) : (
          ''
        )}
      </div>
      <div>
        {email ? (
          <p className='flex items-center justify-center'>
            <span className='mr-2'>
              <BsEnvelope />
            </span>
            {email}
          </p>
        ) : null}
      </div>
      <div>
        {blog ? (
          <p className='flex items-center justify-center w-52 mx-auto break-words'>
            <span className='mr-2'>
              <MdLink />
            </span>
            <a target='_blank' href={`${blog}`}>
              {blog}
            </a>
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
