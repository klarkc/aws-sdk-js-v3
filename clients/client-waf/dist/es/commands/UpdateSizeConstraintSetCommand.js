import { __extends } from "tslib";
import { UpdateSizeConstraintSetRequest, UpdateSizeConstraintSetResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateSizeConstraintSetCommand, serializeAws_json1_1UpdateSizeConstraintSetCommand, } from "../protocols/Aws_json1_1";
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
 * 		       <p>Inserts or deletes <a>SizeConstraint</a> objects (filters) in a <a>SizeConstraintSet</a>. For each <code>SizeConstraint</code> object,
 * 			you specify the following values: </p>
 * 		       <ul>
 *             <li>
 *                <p>Whether to insert or delete the object from the array. If you want to change a <code>SizeConstraintSetUpdate</code> object,
 * 				you delete the existing object and add a new one.</p>
 *             </li>
 *             <li>
 *                <p>The part of a web request that you want AWS WAF to evaluate, such as the length of a query string or the length of the
 * 				<code>User-Agent</code> header.</p>
 *             </li>
 *             <li>
 *                <p>Whether to perform any transformations on the request, such as converting it to lowercase, before checking its length.
 * 				Note that transformations of the request body are not supported because the AWS resource forwards only the first <code>8192</code> bytes
 * 				of your request to AWS WAF.</p>
 * 				           <p>You can only specify a single type of TextTransformation.</p>
 *             </li>
 *             <li>
 *                <p>A <code>ComparisonOperator</code> used for evaluating the selected part of the request against the specified <code>Size</code>, such as
 * 				equals, greater than, less than, and so on.</p>
 *             </li>
 *             <li>
 *                <p>The length, in bytes, that you want AWS WAF to watch for in selected part of the request. The length is computed after applying the transformation.</p>
 *             </li>
 *          </ul>
 * 		       <p>For example, you can add a <code>SizeConstraintSetUpdate</code> object that matches web requests in which the length of the
 * 			<code>User-Agent</code> header is greater than 100 bytes. You can then configure AWS WAF to block those requests.</p>
 * 		  	    <p>To create and configure a <code>SizeConstraintSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create a <code>SizeConstraintSet.</code> For more information, see <a>CreateSizeConstraintSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateSizeConstraintSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateSizeConstraintSet</code> request to specify the part of the request that you want AWS WAF to inspect
 * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateSizeConstraintSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateSizeConstraintSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateSizeConstraintSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSizeConstraintSetCommandInput} for command's `input` shape.
 * @see {@link UpdateSizeConstraintSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSizeConstraintSetCommand = /** @class */ (function (_super) {
    __extends(UpdateSizeConstraintSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSizeConstraintSetCommand(input) {
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
    UpdateSizeConstraintSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "UpdateSizeConstraintSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSizeConstraintSetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSizeConstraintSetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSizeConstraintSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateSizeConstraintSetCommand(input, context);
    };
    UpdateSizeConstraintSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateSizeConstraintSetCommand(output, context);
    };
    return UpdateSizeConstraintSetCommand;
}($Command));
export { UpdateSizeConstraintSetCommand };
//# sourceMappingURL=UpdateSizeConstraintSetCommand.js.map