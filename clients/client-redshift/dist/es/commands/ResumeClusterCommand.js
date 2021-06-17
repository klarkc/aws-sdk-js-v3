import { __extends } from "tslib";
import { ResumeClusterMessage } from "../models/models_0";
import { ResumeClusterResult } from "../models/models_1";
import { deserializeAws_queryResumeClusterCommand, serializeAws_queryResumeClusterCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resumes a paused cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResumeClusterCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResumeClusterCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ResumeClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResumeClusterCommandInput} for command's `input` shape.
 * @see {@link ResumeClusterCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResumeClusterCommand = /** @class */ (function (_super) {
    __extends(ResumeClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResumeClusterCommand(input) {
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
    ResumeClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ResumeClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResumeClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ResumeClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResumeClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryResumeClusterCommand(input, context);
    };
    ResumeClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryResumeClusterCommand(output, context);
    };
    return ResumeClusterCommand;
}($Command));
export { ResumeClusterCommand };
//# sourceMappingURL=ResumeClusterCommand.js.map