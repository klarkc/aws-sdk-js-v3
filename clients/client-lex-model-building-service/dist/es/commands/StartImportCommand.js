import { __extends } from "tslib";
import { StartImportRequest, StartImportResponse } from "../models/models_0";
import { deserializeAws_restJson1StartImportCommand, serializeAws_restJson1StartImportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a job to import a resource to Amazon Lex.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, StartImportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, StartImportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new StartImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImportCommandInput} for command's `input` shape.
 * @see {@link StartImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartImportCommand = /** @class */ (function (_super) {
    __extends(StartImportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartImportCommand(input) {
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
    StartImportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "StartImportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartImportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartImportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartImportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartImportCommand(input, context);
    };
    StartImportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartImportCommand(output, context);
    };
    return StartImportCommand;
}($Command));
export { StartImportCommand };
//# sourceMappingURL=StartImportCommand.js.map