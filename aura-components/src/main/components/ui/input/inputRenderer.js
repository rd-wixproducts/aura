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

	render: function(component, helper) {
        var domId = component.get('v.domId'),
			globalId = component.getConcreteComponent().getGlobalId();

		if (!domId) {
			helper.setAttribute(component, {key: 'domId', value: globalId});
		}

		helper.handleErrors(component);
		return this.superRender();
	},

	afterRender: function(component, helper) {
		helper.lib.interactive.addDomEvents(component);
        this.superAfterRender();
		helper.addInputClass(component);

        var concreteCmp = component.getConcreteComponent();
        var concreteHelper = concreteCmp.getDef().getHelper();
        concreteHelper.addInputDomEvents(component);
        concreteHelper.updateErrorElement(component);
    },

    rerender: function(component, helper) {
        var concreteCmp = component.getConcreteComponent();
        var concreteHelper = concreteCmp.getDef().getHelper();
        concreteHelper.addInputDomEvents(component);

        if (!component._creatingAsyncErrorCmp) {
        	concreteHelper.handleErrors(component);
            concreteHelper.updateErrorElement(component);
        }

        this.superRerender();
        helper.addInputClass(component);
    }
})
