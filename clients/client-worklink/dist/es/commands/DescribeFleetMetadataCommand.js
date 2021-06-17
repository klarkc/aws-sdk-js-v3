import { __extends } from "tslib";
import { DescribeFleetMetadataRequest, DescribeFleetMetadataResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeFleetMetadataCommand, serializeAws_restJson1DescribeFleetMetadataCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides basic information for the specified fleet, excluding identity provider,
 *             networking, and device configuration details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkLinkClient, DescribeFleetMetadataCommand } from "@aws-sdk/client-worklink"; // ES Modules import
 * // const { WorkLinkClient, DescribeFleetMetadataCommand } = require("@aws-sdk/client-worklink"); // CommonJS import
 * const client = new WorkLinkClient(config);
 * const command = new DescribeFleetMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkLinkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetMetadataCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetMetadataCommand(input) {
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
    DescribeFleetMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkLinkClient";
        var commandName = "DescribeFleetMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeFleetMetadataCommand(input, context);
    };
    DescribeFleetMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeFleetMetadataCommand(output, context);
    };
    return DescribeFleetMetadataCommand;
}($Command));
export { DescribeFleetMetadataCommand };
//# sourceMappingURL=DescribeFleetMetadataCommand.js.map