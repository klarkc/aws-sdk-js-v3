import { __extends } from "tslib";
import { UpdatePackageRequest, UpdatePackageResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdatePackageCommand, serializeAws_restJson1UpdatePackageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a package for use with Amazon ES domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpdatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpdatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new UpdatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePackageCommandInput} for command's `input` shape.
 * @see {@link UpdatePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdatePackageCommand = /** @class */ (function (_super) {
    __extends(UpdatePackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdatePackageCommand(input) {
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
    UpdatePackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "UpdatePackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdatePackageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdatePackageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdatePackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdatePackageCommand(input, context);
    };
    UpdatePackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdatePackageCommand(output, context);
    };
    return UpdatePackageCommand;
}($Command));
export { UpdatePackageCommand };
//# sourceMappingURL=UpdatePackageCommand.js.map