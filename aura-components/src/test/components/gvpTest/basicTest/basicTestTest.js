/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
({
	
	testSetNotSupported: {
    	test: function(cmp) {
    		$A.test.expectAuraError("Unable to set value for key '$Label.whatever.anything'. Value provider does not implement 'set(key, value)'. : false");
    		$A.set("$Label.whatever.anything","new value");
    	}
    },
    
    testSetNoValueProvider: {
    	test: function(cmp) {
    		$A.test.expectAuraError("Unable to set value for key '$Bla.whatever.anything'. No value provider was found for '$Bla'. : false");
    		$A.set("$Bla.whatever.anything","new value");
    	}
    },
    

    testInvalidGVPExpressions: {
        test: function (cmp) {
            var expected="Assertion Failed!: Unable to get value for key 'v.simplevalue3'. No value provider was found for 'v'. : false";
            var actual = null;

            try {
                $A.get("v.simplevalue3");
            }catch(e){
                actual=e.message||e.description;
            }

            $A.test.assertEquals(expected, actual, "Invalid GVP expression should throw.");
        }
    },
})