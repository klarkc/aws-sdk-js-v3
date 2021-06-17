import { __extends } from "tslib";
import { GetExperimentTemplateRequest, GetExperimentTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1GetExperimentTemplateCommand, serializeAws_restJson1GetExperimentTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link GetExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExperimentTemplateCommand = /** @class */ (function (_super) {
    __extends(GetExperimentTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExperimentTemplateCommand(input) {
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
    GetExperimentTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FisClient";
        var commandName = "GetExperimentTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExperimentTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExperimentTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExperimentTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetExperimentTemplateCommand(input, context);
    };
    GetExperimentTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetExperimentTemplateCommand(output, context);
    };
    return GetExperimentTemplateCommand;
}($Command));
export { GetExperimentTemplateCommand };
//# sourceMappingURL=GetExperimentTemplateCommand.js.map