import { __extends } from "tslib";
import { ClusterCredentials } from "../models/models_0";
import { GetClusterCredentialsMessage } from "../models/models_1";
import { deserializeAws_queryGetClusterCredentialsCommand, serializeAws_queryGetClusterCredentialsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a database user name and temporary password with temporary authorization to
 *             log on to an Amazon Redshift database. The action returns the database user name
 *             prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or
 *                 <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can
 *             optionally specify one or more database user groups that the user will join at log on.
 *             By default, the temporary credentials expire in 900 seconds. You can optionally specify
 *             a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
 *             information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication
 *                 to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p>
 *         <p>The AWS Identity and Access Management (IAM)user or role that executes
 *             GetClusterCredentials must have an IAM policy attached that allows access to all
 *             necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the
 *             Amazon Redshift Cluster Management Guide.</p>
 *         <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the
 *                 <code>redshift:JoinGroup</code> action with access to the listed
 *                 <code>dbgroups</code>. </p>
 *         <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>,
 *             then the policy must include the <code>redshift:CreateClusterUser</code>
 *             privilege.</p>
 *         <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access
 *             to the resource <code>dbname</code> for the specified database name. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetClusterCredentialsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetClusterCredentialsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new GetClusterCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClusterCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterCredentialsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetClusterCredentialsCommand = /** @class */ (function (_super) {
    __extends(GetClusterCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetClusterCredentialsCommand(input) {
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
    GetClusterCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "GetClusterCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetClusterCredentialsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ClusterCredentials.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetClusterCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetClusterCredentialsCommand(input, context);
    };
    GetClusterCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetClusterCredentialsCommand(output, context);
    };
    return GetClusterCredentialsCommand;
}($Command));
export { GetClusterCredentialsCommand };
//# sourceMappingURL=GetClusterCredentialsCommand.js.map