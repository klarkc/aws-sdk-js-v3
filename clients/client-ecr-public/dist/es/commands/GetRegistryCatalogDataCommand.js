import { __extends } from "tslib";
import { GetRegistryCatalogDataRequest, GetRegistryCatalogDataResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRegistryCatalogDataCommand, serializeAws_json1_1GetRegistryCatalogDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves catalog metadata for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRegistryCatalogDataCommand = /** @class */ (function (_super) {
    __extends(GetRegistryCatalogDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRegistryCatalogDataCommand(input) {
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
    GetRegistryCatalogDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "GetRegistryCatalogDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRegistryCatalogDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRegistryCatalogDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRegistryCatalogDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRegistryCatalogDataCommand(input, context);
    };
    GetRegistryCatalogDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRegistryCatalogDataCommand(output, context);
    };
    return GetRegistryCatalogDataCommand;
}($Command));
export { GetRegistryCatalogDataCommand };
//# sourceMappingURL=GetRegistryCatalogDataCommand.js.map