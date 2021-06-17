import { __extends } from "tslib";
import { GetEnvironmentInput, GetEnvironmentOutput } from "../models/models_0";
import { deserializeAws_restJson1GetEnvironmentCommand, serializeAws_restJson1GetEnvironmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details of an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, GetEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, GetEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * const client = new MWAAClient(config);
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEnvironmentCommand = /** @class */ (function (_super) {
    __extends(GetEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEnvironmentCommand(input) {
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
    GetEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MWAAClient";
        var commandName = "GetEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEnvironmentInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetEnvironmentOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEnvironmentCommand(input, context);
    };
    GetEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEnvironmentCommand(output, context);
    };
    return GetEnvironmentCommand;
}($Command));
export { GetEnvironmentCommand };
//# sourceMappingURL=GetEnvironmentCommand.js.map