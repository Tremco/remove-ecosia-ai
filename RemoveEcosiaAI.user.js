// ==UserScript==
// @name          Remove AI from Ecosia
// @namespace     https://github.com/Tremco/remove-ecosia-ai
// @version       1.1
// @description   Removes AI Overviews and other AI related UI elements from ecosia.org.
// @author        Tremco
// @match         https://*.ecosia.org/*
// @grant         none
// @homepageURL   https://github.com/Tremco/remove-ecosia-ai
// @license       MIT
// @run-at        document-start
// ==/UserScript==
 
//remove AI Overviews
document.cookie = 'ECAIO=false; path=/; domain=.ecosia.org';
 
//remove AI related UI elements
function removeAIComponents()
{
    document.querySelectorAll(
    [
        '[data-test-id="search-navigation-item-chat"]', //removes the AI UI in the navigation bar
        '[data-test-id="search-form-suggestions"] [href*="/ai-chat"]', //removes AI in search suggestions
        '[data-test-id="ai-overviews-field"]' //removes "Overviews" in Ecosia settings
     
    ].join(',')).forEach(el =>
    {
        (el.closest('li') || el.closest('.search-navigation__item') || el.closest('.field') || el).remove();
    });
}
 
new MutationObserver(removeAIComponents).observe(document.documentElement,
{
    childList: true,
    subtree: true
});
 
window.addEventListener('DOMContentLoaded', removeAIComponents);
