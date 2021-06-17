import { __extends } from "tslib";
import { GetSegmentVersionsRequest, GetSegmentVersionsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetSegmentVersionsCommand, serializeAws_restJson1GetSegmentVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetSegmentVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetSegmentVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetSegmentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSegmentVersionsCommandInput} for command's `input` shape.
 * @see {@link GetSegmentVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSegmentVersionsCommand = /** @class */ (function (_super) {
    __extends(GetSegmentVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSegmentVersionsCommand(input) {
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
    GetSegmentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetSegmentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSegmentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSegmentVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSegmentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSegmentVersionsCommand(input, context);
    };
    GetSegmentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSegmentVersionsCommand(output, context);
    };
    return GetSegmentVersionsCommand;
}($Command));
export { GetSegmentVersionsCommand };
//# sourceMappingURL=GetSegmentVersionsCommand.js.map