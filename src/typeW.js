import TypeWriterEffect from 'react-typewriter-effect';
import React from 'react';

export default function TypeW(){

return(
    <TypeWriterEffect
        textStyle={{
          fontFamily: 'poppins',
          color: '#2149d7',
          fontWeight: 700,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'This page includes Authentication configured through AWS Cognito',
          'It utilizes an AWS S3 storage bucket to maintain the User Database',
          'If that isnt enough AWS we also took advantage of AWS S3 enabling us to host our site server free',
          'We have AWS IAM roles in place allowing us to configure AWS Amplify as a simple component wrapper',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={70}
      />
      
)
    }