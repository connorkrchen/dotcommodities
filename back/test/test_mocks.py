from .BLS_mocks import *

import unittest
import sys

sys.path.insert(0, '../src')

from ApiBLS import * 


class TestMocks(unittest.TestCase):

    # tests that API receives a response for Autauga County, AL with:
    # - successful response
    # - non-negative statistic
    # - matching state and county fips as the ones that were queried
    # - non-empty response message

    def test_Mocks(self):
        res = json.loads(mock_function("unemployment_rate_mock"))
        self.assertEqual(res["status"], "success")
        self.assertTrue(float(res["unemployment_rate"]) >= 0)
        self.assertEqual(res["state_fips"], "01")
        self.assertEqual(res["county_fips"], "001")
        self.assertTrue(len(res["message"]) > 0)

        res = json.loads(mock_function("labor_force_mock"))
        self.assertEqual(res["status"], "success")
        self.assertTrue(float(res["labor_force"]) >= 0)
        self.assertEqual(res["state_fips"], "01")
        self.assertEqual(res["county_fips"], "001")
        self.assertTrue(len(res["message"]) > 0)


        res = json.loads(mock_function("unemployment_mock"))
        self.assertEqual(res["status"], "success")
        self.assertTrue(float(res["unemployed"]) >= 0)
        self.assertEqual(res["state_fips"], "01")
        self.assertEqual(res["county_fips"], "001")
        self.assertTrue(len(res["message"]) > 0)


        res = json.loads(mock_function("industry_employment_mock"))
        self.assertEqual(res["status"], "success")
        self.assertTrue(float(res["employed"]) >= 0)
        self.assertEqual(res["state_fips"], "01")
        self.assertEqual(res["county_fips"], "001")
        self.assertTrue(len(res["message"]) > 0)





if __name__ == '__main__':
    unittest.main()