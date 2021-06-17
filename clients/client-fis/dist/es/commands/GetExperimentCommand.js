import { __extends } from "tslib";
import { GetExperimentRequest, GetExperimentResponse } from "../models/models_0";
import { deserializeAws_restJson1GetExperimentCommand, serializeAws_restJson1GetExperimentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExperimentCommandInput} for command's `input` shape.
 * @see {@link GetExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExperimentCommand = /** @class */ (function (_super) {
    __extends(GetExperimentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExperimentCommand(input) {
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
    GetExperimentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "GetExperimentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExperimentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExperimentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExperimentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetExperimentCommand(input, context);
    };
    GetExperimentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetExperimentCommand(output, context);
    };
    return GetExperimentCommand;
}($Command));
export { GetExperimentCommand };
//# sourceMappingURL=GetExperimentCommand.js.map