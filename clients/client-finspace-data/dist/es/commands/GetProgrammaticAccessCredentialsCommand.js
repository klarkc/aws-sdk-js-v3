import { __extends } from "tslib";
import { GetProgrammaticAccessCredentialsRequest, GetProgrammaticAccessCredentialsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand, serializeAws_restJson1GetProgrammaticAccessCredentialsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Request programmatic credentials to use with Habanero SDK.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetProgrammaticAccessCredentialsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new GetProgrammaticAccessCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetProgrammaticAccessCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetProgrammaticAccessCredentialsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetProgrammaticAccessCredentialsCommand = /** @class */ (function (_super) {
    __extends(GetProgrammaticAccessCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetProgrammaticAccessCredentialsCommand(input) {
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
    GetProgrammaticAccessCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceDataClient";
        var commandName = "GetProgrammaticAccessCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetProgrammaticAccessCredentialsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetProgrammaticAccessCredentialsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetProgrammaticAccessCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetProgrammaticAccessCredentialsCommand(input, context);
    };
    GetProgrammaticAccessCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetProgrammaticAccessCredentialsCommand(output, context);
    };
    return GetProgrammaticAccessCredentialsCommand;
}($Command));
export { GetProgrammaticAccessCredentialsCommand };
//# sourceMappingURL=GetProgrammaticAccessCredentialsCommand.js.map