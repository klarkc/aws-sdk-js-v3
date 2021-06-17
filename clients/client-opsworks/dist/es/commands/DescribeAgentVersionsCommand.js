import { __extends } from "tslib";
import { DescribeAgentVersionsRequest, DescribeAgentVersionsResult } from "../models/models_0";
import { deserializeAws_json1_1DescribeAgentVersionsCommand, serializeAws_json1_1DescribeAgentVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the available AWS OpsWorks Stacks agent versions. You must specify a stack ID or a
 *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
 *     agent versions for the specified stack or configuration manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeAgentVersionsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeAgentVersionsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new DescribeAgentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAgentVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAgentVersionsCommand = /** @class */ (function (_super) {
    __extends(DescribeAgentVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAgentVersionsCommand(input) {
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
    DescribeAgentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "OpsWorksClient";
        var commandName = "DescribeAgentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAgentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAgentVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAgentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAgentVersionsCommand(input, context);
    };
    DescribeAgentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAgentVersionsCommand(output, context);
    };
    return DescribeAgentVersionsCommand;
}($Command));
export { DescribeAgentVersionsCommand };
//# sourceMappingURL=DescribeAgentVersionsCommand.js.map