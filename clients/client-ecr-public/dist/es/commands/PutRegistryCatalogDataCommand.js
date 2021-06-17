import { __extends } from "tslib";
import { PutRegistryCatalogDataRequest, PutRegistryCatalogDataResponse } from "../models/models_0";
import { deserializeAws_json1_1PutRegistryCatalogDataCommand, serializeAws_json1_1PutRegistryCatalogDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create or updates the catalog data for a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRegistryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRegistryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new PutRegistryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRegistryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRegistryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRegistryCatalogDataCommand = /** @class */ (function (_super) {
    __extends(PutRegistryCatalogDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRegistryCatalogDataCommand(input) {
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
    PutRegistryCatalogDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "PutRegistryCatalogDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRegistryCatalogDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRegistryCatalogDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRegistryCatalogDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRegistryCatalogDataCommand(input, context);
    };
    PutRegistryCatalogDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRegistryCatalogDataCommand(output, context);
    };
    return PutRegistryCatalogDataCommand;
}($Command));
export { PutRegistryCatalogDataCommand };
//# sourceMappingURL=PutRegistryCatalogDataCommand.js.map