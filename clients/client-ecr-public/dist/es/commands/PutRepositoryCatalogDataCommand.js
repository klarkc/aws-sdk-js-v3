import { __extends } from "tslib";
import { PutRepositoryCatalogDataRequest, PutRepositoryCatalogDataResponse } from "../models/models_0";
import { deserializeAws_json1_1PutRepositoryCatalogDataCommand, serializeAws_json1_1PutRepositoryCatalogDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates the catalog data for a repository in a public registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, PutRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, PutRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new PutRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link PutRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutRepositoryCatalogDataCommand = /** @class */ (function (_super) {
    __extends(PutRepositoryCatalogDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutRepositoryCatalogDataCommand(input) {
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
    PutRepositoryCatalogDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "PutRepositoryCatalogDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutRepositoryCatalogDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutRepositoryCatalogDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutRepositoryCatalogDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutRepositoryCatalogDataCommand(input, context);
    };
    PutRepositoryCatalogDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutRepositoryCatalogDataCommand(output, context);
    };
    return PutRepositoryCatalogDataCommand;
}($Command));
export { PutRepositoryCatalogDataCommand };
//# sourceMappingURL=PutRepositoryCatalogDataCommand.js.map