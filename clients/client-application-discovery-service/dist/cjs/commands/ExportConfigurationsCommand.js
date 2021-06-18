"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportConfigurationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * @deprecated
 *
 * <p>Deprecated. Use <code>StartExportTask</code> instead.</p>
 *          <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that
 *       enables you to view and evaluate the data. Data includes tags and tag associations, processes,
 *       connections, servers, and system performance. This API returns an export ID that you can query
 *       using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of
 *       two configuration exports in six hours.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ExportConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ExportConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new ExportConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ExportConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ExportConfigurationsCommand extends smithy_client_1.Command {
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
    const commandName = "ExportConfigurationsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input) => input,
      outputFilterSensitiveLog: models_0_1.ExportConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1ExportConfigurationsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1ExportConfigurationsCommand(output, context);
  }
}
exports.ExportConfigurationsCommand = ExportConfigurationsCommand;
//# sourceMappingURL=ExportConfigurationsCommand.js.map
