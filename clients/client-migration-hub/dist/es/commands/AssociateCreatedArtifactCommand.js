import { __extends } from "tslib";
import { AssociateCreatedArtifactRequest, AssociateCreatedArtifactResult } from "../models/models_0";
import { deserializeAws_json1_1AssociateCreatedArtifactCommand, serializeAws_json1_1AssociateCreatedArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a created artifact of an AWS cloud resource, the target receiving the
 *          migration, with the migration task performed by a migration tool. This API has the
 *          following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to
 *                indicate which AWS artifact is associated with a migration task.</p>
 *             </li>
 *             <li>
 *                <p>The created artifact name must be provided in ARN (Amazon Resource Name) format
 *                which will contain information about type and region; for example:
 *                   <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p>
 *             </li>
 *             <li>
 *                <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance,
 *                or DMS endpoint, etc.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, AssociateCreatedArtifactCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, AssociateCreatedArtifactCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new AssociateCreatedArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateCreatedArtifactCommandInput} for command's `input` shape.
 * @see {@link AssociateCreatedArtifactCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateCreatedArtifactCommand = /** @class */ (function (_super) {
    __extends(AssociateCreatedArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateCreatedArtifactCommand(input) {
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
    AssociateCreatedArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MigrationHubClient";
        var commandName = "AssociateCreatedArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateCreatedArtifactRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateCreatedArtifactResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateCreatedArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateCreatedArtifactCommand(input, context);
    };
    AssociateCreatedArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateCreatedArtifactCommand(output, context);
    };
    return AssociateCreatedArtifactCommand;
}($Command));
export { AssociateCreatedArtifactCommand };
//# sourceMappingURL=AssociateCreatedArtifactCommand.js.map