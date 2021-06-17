import { __extends } from "tslib";
import { GetImportRequest, GetImportResponse } from "../models/models_0";
import { deserializeAws_restJson1GetImportCommand, serializeAws_restJson1GetImportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about an import job started with the
 *         <code>StartImport</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetImportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetImportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetImportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetImportCommandInput} for command's `input` shape.
 * @see {@link GetImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetImportCommand = /** @class */ (function (_super) {
    __extends(GetImportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetImportCommand(input) {
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
    GetImportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetImportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetImportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetImportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetImportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetImportCommand(input, context);
    };
    GetImportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetImportCommand(output, context);
    };
    return GetImportCommand;
}($Command));
export { GetImportCommand };
//# sourceMappingURL=GetImportCommand.js.map