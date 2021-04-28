module.exports = {
  '/auth/login': {
    post: {
      tags: ['Auth'],
      name: 'Login',
      summary: 'Login User & Get Access Token',
      consumes: ['application/json'],
      requestBody: {
        name: 'User',
        required: true,
        description: 'User credentials to login.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'admin@admin.com',
                },
                password: {
                  type: 'string',
                  format: 'password',
                  example: 'password',
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: 'Success Response',
          content: {
            'application/json': {
              example: {
                code: 200,
                status: 'success',
                message: 'Login success',
                data: {
                  name: 'John Doe',
                  email: 'admin@admin.com',
                  token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjE5NjQzMjEwfQ.d0g-mXLIcyq5W7RzMPi0LTn9UIZUOl2MN5wWrk2mfag',
                },
              },
            },
          },
        },
        422: {
          description: 'Invalid/Validation Error.',
          content: {
            'application/json': {
              example: {
                code: 422,
                status: 'failed',
                message: 'Invalid Username or Password',
                data: null,
              },
            },
          },
        },
      },
    },
  },
};
