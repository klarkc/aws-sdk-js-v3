import { __extends } from "tslib";
import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1";
import { deserializeAws_queryDescribeSourceRegionsCommand, serializeAws_queryDescribeSourceRegionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the source AWS Regions where the current AWS Region can create a read replica,
 *          copy a DB snapshot from, or replicate automated backups from. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeSourceRegionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeSourceRegionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSourceRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceRegionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSourceRegionsCommand = /** @class */ (function (_super) {
    __extends(DescribeSourceRegionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSourceRegionsCommand(input) {
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
    DescribeSourceRegionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeSourceRegionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSourceRegionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: SourceRegionMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSourceRegionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeSourceRegionsCommand(input, context);
    };
    DescribeSourceRegionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeSourceRegionsCommand(output, context);
    };
    return DescribeSourceRegionsCommand;
}($Command));
export { DescribeSourceRegionsCommand };
//# sourceMappingURL=DescribeSourceRegionsCommand.js.map