import { __extends } from "tslib";
import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/models_0";
import { deserializeAws_json1_1CreateResourceDataSyncCommand, serializeAws_json1_1CreateResourceDataSyncCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A resource data sync helps you view data from multiple sources in a single location. Systems
 *    Manager offers two types of resource data sync: <code>SyncToDestination</code> and
 *     <code>SyncFromSource</code>.</p>
 *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
 *    synchronize Inventory data from multiple AWS Regions to a single S3 bucket. For more information,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data
 *     Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize
 *    operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions to a
 *    single S3 bucket. This type can synchronize OpsItems and OpsData from multiple AWS accounts and
 *    Regions or <code>EntireOrganization</code> by using AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
 *    successful initial sync is completed, the system continuously syncs data. To check the status of
 *    a sync, use the <a>ListResourceDataSync</a>.</p>
 *          <note>
 *             <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption
 *     in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3
 *     bucket by creating a restrictive bucket policy. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateResourceDataSyncCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateResourceDataSyncCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateResourceDataSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceDataSyncCommandInput} for command's `input` shape.
 * @see {@link CreateResourceDataSyncCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateResourceDataSyncCommand = /** @class */ (function (_super) {
    __extends(CreateResourceDataSyncCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateResourceDataSyncCommand(input) {
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
    CreateResourceDataSyncCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateResourceDataSyncCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateResourceDataSyncRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateResourceDataSyncResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateResourceDataSyncCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateResourceDataSyncCommand(input, context);
    };
    CreateResourceDataSyncCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateResourceDataSyncCommand(output, context);
    };
    return CreateResourceDataSyncCommand;
}($Command));
export { CreateResourceDataSyncCommand };
//# sourceMappingURL=CreateResourceDataSyncCommand.js.map