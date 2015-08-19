/**
 * @ignore
 * dom text node
 * @author yiminghe@gmail.com
 */

var TextNode = require('./text');
var util = require('../util');
function CData() {
    CData.superclass.constructor.apply(this, arguments);
    this.nodeType = 4;
    this.nodeName = '#cdata';
}

util.extend(CData, TextNode, {
    writeHtml: function (writer, filter) {
        var ret;
        if (!filter || (ret = filter.onCData(this)) !== false) {
            if (ret) {
                if (this !== ret) {
                    ret.writeHtml(writer, filter);
                    return;
                }
            }
            writer.cdata(this.toHtml());
        }
    }
});

module.exports = CData;
