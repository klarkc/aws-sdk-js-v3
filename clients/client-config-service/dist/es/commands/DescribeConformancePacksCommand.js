import { __extends } from "tslib";
import { DescribeConformancePacksRequest, DescribeConformancePacksResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeConformancePacksCommand, serializeAws_json1_1DescribeConformancePacksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of one or more conformance packs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePacksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePacksCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConformancePacksCommand = /** @class */ (function (_super) {
    __extends(DescribeConformancePacksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConformancePacksCommand(input) {
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
    DescribeConformancePacksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConformancePacksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConformancePacksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConformancePacksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConformancePacksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConformancePacksCommand(input, context);
    };
    DescribeConformancePacksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConformancePacksCommand(output, context);
    };
    return DescribeConformancePacksCommand;
}($Command));
export { DescribeConformancePacksCommand };
//# sourceMappingURL=DescribeConformancePacksCommand.js.map