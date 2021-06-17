import { __extends } from "tslib";
import { GetPackageVersionHistoryRequest, GetPackageVersionHistoryResponse } from "../models/models_0";
import { deserializeAws_restJson1GetPackageVersionHistoryCommand, serializeAws_restJson1GetPackageVersionHistoryCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of versions of the package, along with their creation time and commit message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetPackageVersionHistoryCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetPackageVersionHistoryCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetPackageVersionHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPackageVersionHistoryCommandInput} for command's `input` shape.
 * @see {@link GetPackageVersionHistoryCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPackageVersionHistoryCommand = /** @class */ (function (_super) {
    __extends(GetPackageVersionHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPackageVersionHistoryCommand(input) {
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
    GetPackageVersionHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "GetPackageVersionHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPackageVersionHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetPackageVersionHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPackageVersionHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetPackageVersionHistoryCommand(input, context);
    };
    GetPackageVersionHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetPackageVersionHistoryCommand(output, context);
    };
    return GetPackageVersionHistoryCommand;
}($Command));
export { GetPackageVersionHistoryCommand };
//# sourceMappingURL=GetPackageVersionHistoryCommand.js.map