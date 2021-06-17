import { __extends } from "tslib";
import { DescribeJobsRequest, DescribeJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeJobsCommand, serializeAws_restJson1DescribeJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of Jobs. Use the JobsID and fromDate and toData filters to limit which jobs are returned. The response is sorted by creationDataTime - latest date first. Jobs are normaly created by the StartTest, StartCutover, and TerminateTargetInstances APIs. Jobs are also created by DiagnosticLaunch and TerminateDiagnosticInstances, which are APIs available only to *Support* and only used in response to relevant support tickets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DescribeJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobsCommand = /** @class */ (function (_super) {
    __extends(DescribeJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobsCommand(input) {
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
    DescribeJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DescribeJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJobsCommand(input, context);
    };
    DescribeJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJobsCommand(output, context);
    };
    return DescribeJobsCommand;
}($Command));
export { DescribeJobsCommand };
//# sourceMappingURL=DescribeJobsCommand.js.map