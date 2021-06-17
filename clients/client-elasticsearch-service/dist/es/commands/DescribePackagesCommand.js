import { __extends } from "tslib";
import { DescribePackagesRequest, DescribePackagesResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePackagesCommand, serializeAws_restJson1DescribePackagesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes all packages available to Amazon ES. Includes options for filtering, limiting the number of results, and pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribePackagesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribePackagesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DescribePackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePackagesCommandInput} for command's `input` shape.
 * @see {@link DescribePackagesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePackagesCommand = /** @class */ (function (_super) {
    __extends(DescribePackagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePackagesCommand(input) {
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
    DescribePackagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DescribePackagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePackagesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePackagesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePackagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePackagesCommand(input, context);
    };
    DescribePackagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePackagesCommand(output, context);
    };
    return DescribePackagesCommand;
}($Command));
export { DescribePackagesCommand };
//# sourceMappingURL=DescribePackagesCommand.js.map