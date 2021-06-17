import { __extends } from "tslib";
import { GetRepositoryCatalogDataRequest, GetRepositoryCatalogDataResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRepositoryCatalogDataCommand, serializeAws_json1_1GetRepositoryCatalogDataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve catalog metadata for a repository in a public registry. This metadata is
 *          displayed publicly in the Amazon ECR Public Gallery.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, GetRepositoryCatalogDataCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, GetRepositoryCatalogDataCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new GetRepositoryCatalogDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryCatalogDataCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryCatalogDataCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRepositoryCatalogDataCommand = /** @class */ (function (_super) {
    __extends(GetRepositoryCatalogDataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRepositoryCatalogDataCommand(input) {
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
    GetRepositoryCatalogDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "GetRepositoryCatalogDataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRepositoryCatalogDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRepositoryCatalogDataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRepositoryCatalogDataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRepositoryCatalogDataCommand(input, context);
    };
    GetRepositoryCatalogDataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRepositoryCatalogDataCommand(output, context);
    };
    return GetRepositoryCatalogDataCommand;
}($Command));
export { GetRepositoryCatalogDataCommand };
//# sourceMappingURL=GetRepositoryCatalogDataCommand.js.map