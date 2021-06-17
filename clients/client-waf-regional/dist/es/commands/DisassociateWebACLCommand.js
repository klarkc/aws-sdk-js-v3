import { __extends } from "tslib";
import { DisassociateWebACLRequest, DisassociateWebACLResponse } from "../models/models_0";
import { deserializeAws_json1_1DisassociateWebACLCommand, serializeAws_json1_1DisassociateWebACLCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic Regional</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Removes a web ACL from the specified resource, either an application load balancer or Amazon API Gateway stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, DisassociateWebACLCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, DisassociateWebACLCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new DisassociateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateWebACLCommandInput} for command's `input` shape.
 * @see {@link DisassociateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateWebACLCommand = /** @class */ (function (_super) {
    __extends(DisassociateWebACLCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateWebACLCommand(input) {
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
    DisassociateWebACLCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFRegionalClient";
        var commandName = "DisassociateWebACLCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateWebACLRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateWebACLResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateWebACLCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateWebACLCommand(input, context);
    };
    DisassociateWebACLCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateWebACLCommand(output, context);
    };
    return DisassociateWebACLCommand;
}($Command));
export { DisassociateWebACLCommand };
//# sourceMappingURL=DisassociateWebACLCommand.js.map