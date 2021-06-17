import { __extends } from "tslib";
import { SearchTransitGatewayRoutesRequest, SearchTransitGatewayRoutesResult } from "../models/models_5";
import { deserializeAws_ec2SearchTransitGatewayRoutesCommand, serializeAws_ec2SearchTransitGatewayRoutesCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for routes in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new SearchTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchTransitGatewayRoutesCommand = /** @class */ (function (_super) {
    __extends(SearchTransitGatewayRoutesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchTransitGatewayRoutesCommand(input) {
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
    SearchTransitGatewayRoutesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "SearchTransitGatewayRoutesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchTransitGatewayRoutesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchTransitGatewayRoutesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchTransitGatewayRoutesCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2SearchTransitGatewayRoutesCommand(input, context);
    };
    SearchTransitGatewayRoutesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2SearchTransitGatewayRoutesCommand(output, context);
    };
    return SearchTransitGatewayRoutesCommand;
}($Command));
export { SearchTransitGatewayRoutesCommand };
//# sourceMappingURL=SearchTransitGatewayRoutesCommand.js.map