"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeRegionSettingsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the current service opt-in settings for the Region. If service-opt-in is enabled
 *          for a service, AWS Backup tries to protect that service's resources in this Region, when
 *          the resource is included in an on-demand backup or scheduled backup plan. Otherwise, AWS
 *          Backup does not try to protect that service's resources in this Region, AWS Backup does not
 *          try to protect that service's resources in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRegionSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRegionSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeRegionSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRegionSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeRegionSettingsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeRegionSettingsCommand extends smithy_client_1.Command {
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
    const clientName = "BackupClient";
    const commandName = "DescribeRegionSettingsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeRegionSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeRegionSettingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1DescribeRegionSettingsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1DescribeRegionSettingsCommand(output, context);
  }
}
exports.DescribeRegionSettingsCommand = DescribeRegionSettingsCommand;
//# sourceMappingURL=DescribeRegionSettingsCommand.js.map
