import { __extends } from "tslib";
import { UpdateIPSetRequest, UpdateIPSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateIPSetCommand, serializeAws_json1_1UpdateIPSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Inserts or deletes <a>IPSetDescriptor</a> objects in an
 *          <code>IPSet</code>. For each <code>IPSetDescriptor</code> object, you specify the following
 *          values: </p>
 *          <ul>
 *             <li>
 *                <p>Whether to insert or delete the object from the array. If you want to change an
 *                   <code>IPSetDescriptor</code> object, you delete the existing object and add a new
 *                one.</p>
 *             </li>
 *             <li>
 *                <p>The IP address version, <code>IPv4</code> or <code>IPv6</code>. </p>
 *             </li>
 *             <li>
 *                <p>The IP address in CIDR notation, for example, <code>192.0.2.0/24</code> (for
 *                the range of IP addresses from <code>192.0.2.0</code> to <code>192.0.2.255</code>) or
 *                   <code>192.0.2.44/32</code> (for the individual IP address
 *                <code>192.0.2.44</code>). </p>
 *             </li>
 *          </ul>
 *          <p>AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS
 *          WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128. For more
 *          information about CIDR notation, see the Wikipedia entry <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless
 *             Inter-Domain Routing</a>.</p>
 *          <p>IPv6 addresses can be represented using any of the following formats:</p>
 *          <ul>
 *             <li>
 *                <p>1111:0000:0000:0000:0000:0000:0000:0111/128</p>
 *             </li>
 *             <li>
 *                <p>1111:0:0:0:0:0:0:0111/128</p>
 *             </li>
 *             <li>
 *                <p>1111::0111/128</p>
 *             </li>
 *             <li>
 *                <p>1111::111/128</p>
 *             </li>
 *          </ul>
 *          <p>You use an <code>IPSet</code> to specify which web requests you want to allow or
 *          block based on the IP addresses that the requests originated from. For example, if you're
 *          receiving a lot of requests from one or a small number of IP addresses and you want to
 *          block the requests, you can create an <code>IPSet</code> that specifies those IP addresses,
 *          and then configure AWS WAF to block the requests. </p>
 *          <p>To create and configure an <code>IPSet</code>, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Submit a <a>CreateIPSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide
 *                in the <code>ChangeToken</code> parameter of an <a>UpdateIPSet</a>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateIPSet</code> request to specify the IP addresses that you
 *                want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 *          <p>When you update an <code>IPSet</code>, you specify the IP addresses that you want to
 *          add and/or the IP addresses that you want to delete. If you want to change an IP address,
 *          you delete the existing IP address and add the new one.</p>
 *          <p>You can insert a maximum of 1000 addresses in a single
 *          request.</p>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP
 *          requests, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF
 *             Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateIPSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateIPSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateIPSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateIPSetCommandInput} for command's `input` shape.
 * @see {@link UpdateIPSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateIPSetCommand = /** @class */ (function (_super) {
    __extends(UpdateIPSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateIPSetCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    UpdateIPSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "UpdateIPSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateIPSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateIPSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateIPSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateIPSetCommand(input, context);
    };
    UpdateIPSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateIPSetCommand(output, context);
    };
    return UpdateIPSetCommand;
}($Command));
export { UpdateIPSetCommand };
//# sourceMappingURL=UpdateIPSetCommand.js.map