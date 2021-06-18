import { __extends } from "tslib";
import { BatchDeleteImportDataRequest, BatchDeleteImportDataResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeleteImportDataCommand,
  serializeAws_json1_1BatchDeleteImportDataCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has
 *       a number of records that can identify servers or applications. </p>
 *
 *          <p>AWS Application Discovery Service has built-in matching logic that will identify when
 *       discovered servers match existing entries that you've previously discovered, the information
 *       for the already-existing discovered server is updated. When you delete an import task that
 *       contains records that were used to match, the information in those matched records that comes
 *       from the deleted records will also be deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, BatchDeleteImportDataCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new BatchDeleteImportDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImportDataCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImportDataCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDeleteImportDataCommand = /** @class */ (function (_super) {
  __extends(BatchDeleteImportDataCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function BatchDeleteImportDataCommand(input) {
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
  BatchDeleteImportDataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "BatchDeleteImportDataCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: BatchDeleteImportDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteImportDataResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  BatchDeleteImportDataCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1BatchDeleteImportDataCommand(input, context);
  };
  BatchDeleteImportDataCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1BatchDeleteImportDataCommand(output, context);
  };
  return BatchDeleteImportDataCommand;
})($Command);
export { BatchDeleteImportDataCommand };
//# sourceMappingURL=BatchDeleteImportDataCommand.js.map
