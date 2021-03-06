/*
 * File: app/view/vote/List.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.view.vote.List', {
    extend: 'Ext.dataview.List',
    alias: 'widget.votelist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        id: 'voteList',
        disableSelection: true,
        store: 'Votes',
        grouped: true,
        itemTpl: Ext.create('Ext.XTemplate', 
            '<div class="vote">',
            '{question}',
            '<div class="results">',
            '{result} {[this.voteBreakdown(values.vote_breakdown)]} {[this.required(values.required)]}',
            '<div>',
            '</div>',
            '',
            {
                voteBreakdown: function(voteBreakdown) {
                    var str = '';

                    if (voteBreakdown.total) {
                        str = voteBreakdown.total.Yea + '-' + voteBreakdown.total.Nay;

                        if (voteBreakdown.total['Not Voting']) {
                            str += ", " + voteBreakdown.total['Not Voting'] + " not voting";
                        }
                    }

                    return str;
                },
                required: function(required) {
                    return required ? '(' + required + ' required)' : '';
                }
            }
        )
    }

});