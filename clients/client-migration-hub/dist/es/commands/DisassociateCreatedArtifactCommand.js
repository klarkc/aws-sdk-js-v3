import { __extends } from "tslib";
import { DisassociateCreatedArtifactRequest, DisassociateCreatedArtifactResult } from "../models/models_0";
import { deserializeAws_json1_1DisassociateCreatedArtifactCommand, serializeAws_json1_1DisassociateCreatedArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a
 *          migration tool that was previously associated. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation
 *                to disassociate a created AWS Artifact from a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or RDS instance, etc.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, DisassociateCreatedArtifactCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, DisassociateCreatedArtifactCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new DisassociateCreatedArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateCreatedArtifactCommandInput} for command's `input` shape.
 * @see {@link DisassociateCreatedArtifactCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateCreatedArtifactCommand = /** @class */ (function (_super) {
    __extends(DisassociateCreatedArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateCreatedArtifactCommand(input) {
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
    DisassociateCreatedArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "DisassociateCreatedArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateCreatedArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateCreatedArtifactResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateCreatedArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateCreatedArtifactCommand(input, context);
    };
    DisassociateCreatedArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateCreatedArtifactCommand(output, context);
    };
    return DisassociateCreatedArtifactCommand;
}($Command));
export { DisassociateCreatedArtifactCommand };
//# sourceMappingURL=DisassociateCreatedArtifactCommand.js.map