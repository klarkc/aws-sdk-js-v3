import { __extends } from "tslib";
import { DescribeAccountAttributesMessage, DescribeAccountAttributesResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeAccountAttributesCommand, serializeAws_json1_1DescribeAccountAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all of the AWS DMS attributes for a customer account. These attributes include AWS
 *          DMS quotas for the account and a unique account identifier in a particular DMS region. DMS
 *          quotas include a list of resource quotas supported by the account, such as the number of
 *          replication instances allowed. The description for each resource quota, includes the quota
 *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
 *          account identifier to name each artifact used by DMS in the given region.</p>
 *          <p>This command does not take any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountAttributesCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountAttributesCommand(input) {
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
    DescribeAccountAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DatabaseMigrationServiceClient";
        var commandName = "DescribeAccountAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountAttributesMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountAttributesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAccountAttributesCommand(input, context);
    };
    DescribeAccountAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAccountAttributesCommand(output, context);
    };
    return DescribeAccountAttributesCommand;
}($Command));
export { DescribeAccountAttributesCommand };
//# sourceMappingURL=DescribeAccountAttributesCommand.js.map