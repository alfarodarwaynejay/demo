import React from 'react'
import {
  TableRow,
  DataTable,
  TableBody,
  TableHeader,
  TableColumn,
} from 'react-md'

const mockData = [
  {
    id: "0af15091-f9a4-3daf-bd4a-f457c549b4b2",
    status: "ACTIVE",
    createdAt: "2019-09-02T11:29:43.819+08:00[Asia/Singapore]",
    email: "test-fiywg@endowus.com",
    personalDetails: {
      salutation: "MR",
      firstName: "Simon",
      lastName: "Craft",
      legalName: "Craft Simon",
      gender: "MALE",
      dob: "1987-06-16",
      nationality: "GB"
    },
    phoneDetails: {
      countryCode: 62,
      number: 22223333
    }
  },
  {
    id: "122517af-429c-374b-9279-dd8691788662",
    status: "ACTIVE",
    createdAt: "2019-09-11T10:37:40.196+08:00[Asia/Singapore]",
    email: "test-cajuu@endowus.com",
    personalDetails: {
      salutation: "MR",
      firstName: "TOOQY",
      lastName: "QROGB25Z",
      legalName: "LegalName",
      gender: "MALE",
      dob: "1985-02-02",
      nationality: "Singapore"
    },
    phoneDetails: {
      countryCode: 65,
      number: 97506247
    }
  },
  {
    id: "54ffd1ff-f043-36b1-b93c-da8ddcee1d92",
    status: "ACTIVE",
    createdAt: "2019-08-13T17:11:26.22+08:00[Asia/Singapore]",
    email: "test-hwart@endowus.com",
    personalDetails: {
      salutation: "MR",
      firstName: "FD81H22",
      lastName: "EBHN0TUD",
      legalName: "LegalName",
      gender: "FEMALE",
      dob: "1985-02-02",
      nationality: "Singapore"
    },
    phoneDetails: {
      countryCode: 65,
      number: 97506212
    }
  },
  {
    id: "1e4ddf59-cc9b-353e-be8e-6602b67f76dd",
    status: "ACTIVE",
    createdAt: "2019-09-24T10:43:30.97+08:00[Asia/Singapore]",
    email: "test-fgmbj@endowus.com",
    personalDetails: {
      salutation: "MR",
      firstName: "TFLWY",
      lastName: "YKJVLKOY",
      legalName: "LegalName",
      gender: "MALE",
      dob: "1985-02-02",
      nationality: "Singapore"
    },
    phoneDetails: {
      countryCode: 65,
      number: 97506247
    }
  },
  {
    id: "1d594e39-e994-362b-afd0-84d7fffd6aa1",
    status: "ACTIVE",
    createdAt: "2019-09-27T11:06:36.06+08:00[Asia/Singapore]",
    email: "test-y83li@endowus.com",
    personalDetails: {
      salutation: "MR",
      firstName: "QNUGU",
      lastName: "B89WMKV7",
      legalName: "LegalName",
      gender: "MALE",
      dob: "1985-02-02",
      nationality: "Singapore"
    }
  },
  {
    id: "42188d35-de2e-3f5d-b197-555b58046de5",
    status: "REGISTERING",
    createdAt: "2019-08-02T14:28:04.555+08:00[Asia/Singapore]",
    email: "test+abcdefhji@endowus.com"
  },
  {
    id: "6743ca90-c78d-3389-aa19-8edf38172d09",
    status: "REGISTERING",
    createdAt: "2019-08-05T10:35:48.136+08:00[Asia/Singapore]",
    email: "hello21@endowus.com",
    personalDetails: {
      salutation: "MR",
      firstName: "ssedd",
      lastName: "basic",
      legalName: "basic ssedd",
      gender: "FEMALE",
      dob: "1999-01-12",
      nationality: "AF"
    },
    phoneDetails: {
      countryCode: 65,
      number: 88888888
    }
  }
]

const CustomerList = (props) => {
  const {
    onRowClick
  } = props
  const tableHeader = () => {
    const tableColumns = [
      'firstName',
      'lastName',
      'email',
      'status'
    ]
    return (
      <TableHeader>
      <TableRow>
        {tableColumns.map((col_label) => (
          <TableColumn key={col_label}>{col_label}</TableColumn>
        ))}
      </TableRow>
    </TableHeader>
    )
  }

  const tableRow = () => {

    return mockData.map((data) => {
      const {
        id,
        email,
        status,
        personalDetails = {}
      } = data
      const { firstName = '', lastName = '' } = personalDetails
      return (
        <TableRow
          key={id}
          onClick={() => onRowClick(id)}
        >
          <TableColumn>{firstName}</TableColumn>
          <TableColumn>{lastName}</TableColumn>
          <TableColumn>{email}</TableColumn>
          <TableColumn>{status}</TableColumn>
        </TableRow>
      )
    })
  }
  return (
    <DataTable plain>
    {tableHeader()}
    <TableBody>
      {tableRow()}
    </TableBody>
  </DataTable>
  )
}

export default CustomerList
