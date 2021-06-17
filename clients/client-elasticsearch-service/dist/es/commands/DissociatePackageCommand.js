import { __extends } from "tslib";
import { DissociatePackageRequest, DissociatePackageResponse } from "../models/models_0";
import { deserializeAws_restJson1DissociatePackageCommand, serializeAws_restJson1DissociatePackageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Dissociates a package from the Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DissociatePackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DissociatePackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DissociatePackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DissociatePackageCommandInput} for command's `input` shape.
 * @see {@link DissociatePackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DissociatePackageCommand = /** @class */ (function (_super) {
    __extends(DissociatePackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DissociatePackageCommand(input) {
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
    DissociatePackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DissociatePackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DissociatePackageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DissociatePackageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DissociatePackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DissociatePackageCommand(input, context);
    };
    DissociatePackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DissociatePackageCommand(output, context);
    };
    return DissociatePackageCommand;
}($Command));
export { DissociatePackageCommand };
//# sourceMappingURL=DissociatePackageCommand.js.map