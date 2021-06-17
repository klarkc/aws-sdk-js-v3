import { __extends } from "tslib";
import { BatchImportFindingsRequest, BatchImportFindingsResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchImportFindingsCommand, serializeAws_restJson1BatchImportFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Imports security findings generated from an integrated product into Security Hub.
 *          This action is requested by the integrated product to import its findings into
 *          Security Hub.</p>
 *          <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
 *          larger than 240 Kb.</p>
 *          <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update
 *          the following finding fields and objects, which Security Hub customers use to manage their
 *          investigation workflow.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Note</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UserDefinedFields</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VerificationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Workflow</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Confidence</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Criticality</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RelatedFindings</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Severity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Types</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchImportFindingsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchImportFindingsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new BatchImportFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchImportFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchImportFindingsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchImportFindingsCommand = /** @class */ (function (_super) {
    __extends(BatchImportFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchImportFindingsCommand(input) {
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
    BatchImportFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "BatchImportFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchImportFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchImportFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchImportFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchImportFindingsCommand(input, context);
    };
    BatchImportFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchImportFindingsCommand(output, context);
    };
    return BatchImportFindingsCommand;
}($Command));
export { BatchImportFindingsCommand };
//# sourceMappingURL=BatchImportFindingsCommand.js.map