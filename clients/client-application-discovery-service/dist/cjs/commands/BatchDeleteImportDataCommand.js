"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDeleteImportDataCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class BatchDeleteImportDataCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "BatchDeleteImportDataCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.BatchDeleteImportDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.BatchDeleteImportDataResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1BatchDeleteImportDataCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1BatchDeleteImportDataCommand(output, context);
  }
}
exports.BatchDeleteImportDataCommand = BatchDeleteImportDataCommand;
//# sourceMappingURL=BatchDeleteImportDataCommand.js.map
