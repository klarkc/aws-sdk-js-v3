import { __extends } from "tslib";
import { ListSigningJobsRequest, ListSigningJobsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListSigningJobsCommand, serializeAws_restJson1ListSigningJobsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all your signing jobs. You can use the <code>maxResults</code> parameter to
 * 			limit the number of signing jobs that are returned in the response. If additional jobs
 * 			remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in
 * 			subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can
 * 			continue calling <code>ListSigningJobs</code> with your <code>maxResults</code>
 * 			parameter and with new values that code signing returns in the <code>nextToken</code>
 * 			parameter until all of your signing jobs have been returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, ListSigningJobsCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, ListSigningJobsCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new ListSigningJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSigningJobsCommandInput} for command's `input` shape.
 * @see {@link ListSigningJobsCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSigningJobsCommand = /** @class */ (function (_super) {
    __extends(ListSigningJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSigningJobsCommand(input) {
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
    ListSigningJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "ListSigningJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSigningJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListSigningJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSigningJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListSigningJobsCommand(input, context);
    };
    ListSigningJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListSigningJobsCommand(output, context);
    };
    return ListSigningJobsCommand;
}($Command));
export { ListSigningJobsCommand };
//# sourceMappingURL=ListSigningJobsCommand.js.map