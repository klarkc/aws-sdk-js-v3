import { __extends } from "tslib";
import { GetExportRequest, GetExportResponse } from "../models/models_0";
import { deserializeAws_restJson1GetExportCommand, serializeAws_restJson1GetExportCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports the contents of a Amazon Lex resource in a specified format.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetExportCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetExportCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportCommandInput} for command's `input` shape.
 * @see {@link GetExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExportCommand = /** @class */ (function (_super) {
    __extends(GetExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExportCommand(input) {
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
    GetExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LexModelBuildingServiceClient";
        var commandName = "GetExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExportResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetExportCommand(input, context);
    };
    GetExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetExportCommand(output, context);
    };
    return GetExportCommand;
}($Command));
export { GetExportCommand };
//# sourceMappingURL=GetExportCommand.js.map