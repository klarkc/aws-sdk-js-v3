import { __extends } from "tslib";
import { DescribeConformancePackStatusRequest, DescribeConformancePackStatusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeConformancePackStatusCommand, serializeAws_json1_1DescribeConformancePackStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides one or more conformance packs deployment status.</p>
 * 		       <note>
 *             <p>If there are no conformance packs then you will see an empty result.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeConformancePackStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConformancePackStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConformancePackStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeConformancePackStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConformancePackStatusCommand(input) {
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
    DescribeConformancePackStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribeConformancePackStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConformancePackStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConformancePackStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConformancePackStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConformancePackStatusCommand(input, context);
    };
    DescribeConformancePackStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConformancePackStatusCommand(output, context);
    };
    return DescribeConformancePackStatusCommand;
}($Command));
export { DescribeConformancePackStatusCommand };
//# sourceMappingURL=DescribeConformancePackStatusCommand.js.map