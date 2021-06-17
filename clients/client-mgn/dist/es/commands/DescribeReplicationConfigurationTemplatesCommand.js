import { __extends } from "tslib";
import { DescribeReplicationConfigurationTemplatesRequest, DescribeReplicationConfigurationTemplatesResponse, } from "../models/models_0";
import { deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand, serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all ReplicationConfigurationTemplates, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeReplicationConfigurationTemplatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeReplicationConfigurationTemplatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeReplicationConfigurationTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationConfigurationTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigurationTemplatesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplicationConfigurationTemplatesCommand = /** @class */ (function (_super) {
    __extends(DescribeReplicationConfigurationTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplicationConfigurationTemplatesCommand(input) {
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
    DescribeReplicationConfigurationTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DescribeReplicationConfigurationTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplicationConfigurationTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplicationConfigurationTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand(input, context);
    };
    DescribeReplicationConfigurationTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand(output, context);
    };
    return DescribeReplicationConfigurationTemplatesCommand;
}($Command));
export { DescribeReplicationConfigurationTemplatesCommand };
//# sourceMappingURL=DescribeReplicationConfigurationTemplatesCommand.js.map