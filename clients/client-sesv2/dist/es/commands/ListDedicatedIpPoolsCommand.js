import { __extends } from "tslib";
import { ListDedicatedIpPoolsRequest, ListDedicatedIpPoolsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDedicatedIpPoolsCommand, serializeAws_restJson1ListDedicatedIpPoolsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all of the dedicated IP pools that exist in your AWS account in the current
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDedicatedIpPoolsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDedicatedIpPoolsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListDedicatedIpPoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDedicatedIpPoolsCommandInput} for command's `input` shape.
 * @see {@link ListDedicatedIpPoolsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDedicatedIpPoolsCommand = /** @class */ (function (_super) {
    __extends(ListDedicatedIpPoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDedicatedIpPoolsCommand(input) {
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
    ListDedicatedIpPoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListDedicatedIpPoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDedicatedIpPoolsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDedicatedIpPoolsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDedicatedIpPoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDedicatedIpPoolsCommand(input, context);
    };
    ListDedicatedIpPoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDedicatedIpPoolsCommand(output, context);
    };
    return ListDedicatedIpPoolsCommand;
}($Command));
export { ListDedicatedIpPoolsCommand };
//# sourceMappingURL=ListDedicatedIpPoolsCommand.js.map