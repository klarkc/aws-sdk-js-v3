import { __extends } from "tslib";
import { StartReportCreationInput, StartReportCreationOutput } from "../models/models_0";
import { deserializeAws_json1_1StartReportCreationCommand, serializeAws_json1_1StartReportCreationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a report that lists all tagged resources in the accounts across your
 *             organization and tells whether each resource is compliant with the effective tag policy.
 *             Compliance data is refreshed daily. The report is generated asynchronously.</p>
 *         <p>The generated report is saved to the following location:</p>
 *         <p>
 *             <code>s3://example-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
 *          </p>
 *         <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const command = new StartReportCreationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReportCreationCommandInput} for command's `input` shape.
 * @see {@link StartReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartReportCreationCommand = /** @class */ (function (_super) {
    __extends(StartReportCreationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartReportCreationCommand(input) {
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
    StartReportCreationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ResourceGroupsTaggingAPIClient";
        var commandName = "StartReportCreationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartReportCreationInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartReportCreationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartReportCreationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartReportCreationCommand(input, context);
    };
    StartReportCreationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartReportCreationCommand(output, context);
    };
    return StartReportCreationCommand;
}($Command));
export { StartReportCreationCommand };
//# sourceMappingURL=StartReportCreationCommand.js.map